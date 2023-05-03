<?php

namespace App\QueryBuilder\Admin\Catalog;

use App\Enums\CatalogEnums;
use App\Models\Admin\Catalog\Category;
use App\Models\Admin\Catalog\Order;
use App\Models\Admin\Catalog\Product;
use App\Models\Admin\Catalog\Settings;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;

class CatalogBuilder extends QueryBuilder
{

    public function __construct()
    {
        $this->order = Order::query();
        $this->product = Product::query();
        $this->category = Category::query();
        $this->settings = Settings::query();
    }

    public function getNavigationLinks($key = null)
    {
        $links = [CatalogEnums::ORDER->value => ['url' => route('admin.catalog'), 'name' => 'Список заказов'],
            CatalogEnums::PRODUCT->value => ['url' => route('admin.catalog.product.index'), 'name' => 'Товары'],
            CatalogEnums::CATEGORY->value => ['url'=> route('admin.catalog.category.index'), 'name' => 'Категории'],
            CatalogEnums::SETTINGS->value => ['url'=> route('admin.catalog.settings.index'),  'name' => 'Настройки']
        ];
        if($key)
            $links[$key]['active'] = true;
        return $links;
    }

    public function getNavigationPageLink($key)
    {
        $links = [CatalogEnums::CONTENT->value => ['url' => CatalogEnums::CONTENT->value, 'name' => 'Контент'],
            CatalogEnums::SEO->value => ['url' => CatalogEnums::SEO->value, 'name' => 'SEO'],
            CatalogEnums::PHOTO->value => ['url'=> CatalogEnums::PHOTO->value, 'name' => 'Фото'],
        ];

        $links[$key]['active'] = true;
        return $links;
    }

    public function getOrder()
    {
        return $this->order->get();
    }
    public function getProduct()
    {
        return $this->product->get();
    }
    public function getCategory()
    {
        return $this->category->get();
    }

    public function getAll(): Collection
    {
        // TODO: Implement getAll() method.
    }

    public function setOrder(array $items, int $parent = null)
    {
        foreach ($items as $key=>$item)
        {
            $this->category->where('id',$item['id'])->update(['parent'=>$parent,'order'=>$key]);
            $this->category = Category::query();
            if(!empty($item['children']))
            {
                $this->setOrder($item['children'], $item['id']);
            }
        }
    }
}
