<?php 

namespace Ryssbowh\FileTypes\assets;

use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

class SettingsAssets extends AssetBundle
{
    public $sourcePath = __DIR__ . '/../../vue/dist/js';

    public $js = [
        'chunk-vendors.js',
        'main.js'
    ];

    public $depends = [
        CpAsset::class
    ];

    /**
     * @inheritDoc
     */
    public function init()
    {
        parent::init();
        $this->sourcePath = realpath($this->sourcePath);
    }
}