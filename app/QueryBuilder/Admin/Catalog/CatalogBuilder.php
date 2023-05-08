<?php

namespace App\QueryBuilder\Admin\Catalog;

use App\Enums\CatalogEnums;
use App\Models\Admin\Catalog\Category;
use App\Models\Admin\Catalog\Order;
use App\Models\Admin\Catalog\Product;
use App\Models\Admin\Catalog\Settings;
use App\QueryBuilder\QueryBuilder;
use Illuminate\Database\Eloquent\Collection;
use PhpParser\Node\Expr\Cast\Object_;

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

    public function search(string $text)
    {
        $products = $this->product->where('title', 'like', '%'.$text.'%')->get();
        foreach ($products as $key=>$product)
        {
            $products[$key]->url = route("admin.catalog.product.edit",$product->id);
            $products[$key]->deleteUrl = route("admin.catalog.product.destroy",$product->id);
        }
        return $products;
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

    private function setCategoryParent(Collection $items)
    {


        foreach ($items as $item)
        {
            $this->model = Category::query();
            $parent = $this->model->where('parent','=',$item->id)->orderBy('order')->get();
            if (count($parent) > 0) {
                $item->parent = $parent;
                $this->setCategoryParent($item->parent);
            }
        }

        return $items;
    }

    public function getCategoryParent(): Collection
    {
        $category = $this->category->where('parent','=',null)->orderBy('order')->get();
        return $this->setCategoryParent($category);
    }
    private function setProductParent(Collection $items)
    {


        foreach ($items as $item)
        {
            $this->model = Product::query();
            $parent = $this->model->where('parent','=',$item->id)->orderBy('order')->get();
            if (count($parent) > 0) {
                $item->parent = $parent;
                $this->setProductParent($item->parent);
            }
        }

        return $items;
    }

    public function getProductParent(): Collection
    {
        $product = $this->category->where('parent','=',null)->orderBy('order')->get();
        return $this->setProductParent($product);
    }
    public function getCategory()
    {
        return $this->getCategoryParent();
    }

    public function getAll(): Collection
    {
        // TODO: Implement getAll() method.
    }

    public function setOrderCategory(array $items, int $parent = null)
    {
        foreach ($items as $key=>$item)
        {
            $this->category->where('id',$item['id'])->update(['parent'=>$parent,'order'=>$key]);
            $this->category = Category::query();
            if(!empty($item['children']))
            {
                $this->setOrderCategory($item['children'], $item['id']);
            }
        }
    }

    public function setOrderProduct(array $items, int $category)
    {
        $category = Category::find($category);
        foreach ($items as $key=>$item)
        {
            $product = Product::find($item['id']);
            $category->products()->updateExistingPivot($product->id, ['order' => $key]);
            $category->save();
        }

    }

    public function getProductCategory(string $categoryId)
    {
        $category = Category::find($categoryId);
        return [
            'products'=>$category->products()->get(),
            'category'=>$this->category->where('parent',$category->id)->get()
        ];
    }

    public function getCategoryAll()
    {
        return $this->category->get();
    }

    public function getProductBreadcrumb(string $categoryId)
    {
        $category = Category::find($categoryId);
        $breadcrumbs = [];

        // Добавляем текущую категорию в хлебные крошки
        $breadcrumbs[] = [
            'title' => $category->title,
            'url' => route('admin.catalog.product.show', $category->id)
        ];

        // Если у текущей категории есть родительская категория, добавляем ее в хлебные крошки
        if ($category->parent) {
            $parentBreadcrumbs = $this->getProductBreadcrumb($category->parent);
            $breadcrumbs = array_merge($parentBreadcrumbs, $breadcrumbs);
        }

        return $breadcrumbs;
    }


    private function setCatalogRouter(Collection $items){
        foreach ($items as $key=>$item)
        {

            $this->model = Category::query();
            $parent = $this->model->where('parent', '=', $item->id)->orderBy('order')->get();
            if (count($parent) > 0) {
                $item->parent = $parent;
                $this->setCatalogRouter($item->parent);
            }
            $item->title = "Catalog";

            $products = $item->products()->get();
            if(count($products)>0) {
                foreach ($products as $product)
                    $product->title = "Product";
                $item->parent = $products;
            }

        }
        return $items;
    }

    public function getCatalogRouter()
    {
        $settings = $this->settings->find(1);

        return [[
            'url'=>$settings->url,
            'title'=>"Catalog",
            'parent'=>$this->setCatalogRouter($this->category->where('parent',null)->get())
        ]];
    }
}
