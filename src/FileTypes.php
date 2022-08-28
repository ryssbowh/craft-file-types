<?php
namespace Ryssbowh\FileTypes;

use Ryssbowh\FileTypes\assets\SettingsAssets;
use Ryssbowh\FileTypes\models\Settings;
use craft\base\Model;
use craft\helpers\Assets;
use craft\helpers\ProjectConfig as ProjectConfigHelper;
use craft\services\Plugins;
use craft\services\ProjectConfig;
use yii\base\Event;

class FileTypes extends \craft\base\Plugin
{   
    /**
     * @var Themes
     */
    public static $plugin;
    
    /**
     * @inheritdoc
     */
    public bool $hasCpSettings = true;

    /**
     * inheritDoc
     */
    public function init(): void
    {
        parent::init();

        self::$plugin = $this;

        $settings = $this->settings;

        Event::on(Assets::class, Assets::EVENT_REGISTER_FILE_KINDS, function ($e) use ($settings) {
            if ($settings->fileTypes) {
                $e->fileKinds = $settings->fileTypes;
            }
        });

        if ($settings->fileTypes and $settings->allowAllExtensions) {
            $extensions = [];
            foreach ($settings->fileTypes as $type) {
                $extensions = array_merge($extensions, $type['extensions']);
            }
            \Craft::$app->config->general->allowedFileExtensions = $extensions;
        }

        \Craft::info('Loaded file types plugin', __METHOD__);
    }

    /**
     * @inheritDoc
     */
    protected function settingsHtml(): string
    {
        \Craft::$app->view->registerAssetBundle(SettingsAssets::class);
        return \Craft::$app->view->renderTemplate(
            'file-types/settings',
            [
                'settings' => $this->settings,
                'fileTypes' => $this->settings->fileTypes ?? Assets::getFileKinds()
            ]
        );
    }

    /**
     * @inheritdoc
     */
    protected function createSettingsModel(): ?Model
    {
        return new Settings();
    }
}
