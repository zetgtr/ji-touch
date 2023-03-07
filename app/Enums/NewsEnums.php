<?php

namespace App\Enums;

enum NewsEnums: string
{
    case CONTENT = "content";
    case PHOTO = "photo";
    case SEO = "seo";

    case NEWS = "news";
    case POST = "post";
    case CATEGORY = "category_news";
    case SETTINGS = "settings";
}
