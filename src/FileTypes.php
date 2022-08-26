<?php
namespace Ryssbowh\FileTypes;

use Ryssbowh\FileTypes\assets\SettingsAssets;
use Ryssbowh\FileTypes\models\Settings;
use craft\helpers\Assets;
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
    public $hasCpSettings = true;

    /**
     * inheritDoc
     */
    public function init()
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
    protected function createSettingsModel(): Settings
    {
        return new Settings();
    }
}
