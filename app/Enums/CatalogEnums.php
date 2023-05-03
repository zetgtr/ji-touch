<?php

namespace App\Enums;

enum CatalogEnums: string
{
    case ORDER = "order";
    case PRODUCT = "product";
    case CATEGORY = "category";
    case SETTINGS = "settings";

    case CONTENT = "content";
    case SEO = "seo";
    case PHOTO = "photo";
    public static function all(): array
    {
        return [
            self::ORDER->value,
            self::PRODUCT->value,
            self::CATEGORY->value,
            self::SETTINGS->value,
        ];
    }
}
