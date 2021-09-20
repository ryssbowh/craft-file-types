<?php
namespace Ryssbowh\FileTypes\models;

use craft\base\Model;

class Settings extends Model
{
    /**
     * @var array
     */
    public $fileTypes;

    /**
     * @var boolean
     */
    public $allowAllExtensions = false;

    /**
     * @inheritdoc
     */
    public function defineRules(): array
    {
        return [
            ['fileTypes', 'safe'],
            ['allowAllExtensions', 'boolean'],
        ];
    }
}
