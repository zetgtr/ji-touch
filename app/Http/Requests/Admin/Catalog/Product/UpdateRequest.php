<?php

namespace App\Http\Requests\Admin\Catalog\Product;

use App\Models\Admin\Catalog\Category;
use App\Models\Admin\Catalog\Product;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    public function all($keys = null)
    {
        $data = parent::all($keys);

        $images = $data['images'];

        $jsonImages = json_encode($images);

        $data['images'] = $jsonImages;

        return $data;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'category_id' => ['required'],
            'category_id.*' => ['exists:catalog_categories,id'], // проверяет каждый элемент с таблицей catalog_categories c полем id
            'title'=>['required'],
            'content'=>['required'],
            'characteristics'=>['nullable'],
            'url' => ['required', Rule::unique(Product::class)->ignore($this->id)],
            'seo_title'=>['nullable'],
            'price'=>['nullable'],
            'seo_description'=>['nullable'],
            'seo_keywords'=>['nullable'],
            'images'=>['nullable'],
            'access'=>['required'],
            'new'=>['boolean'],
            'hit'=>['boolean']
        ];
    }

    public function getCategoriesIds(): array
    {
        return (array) $this->validated('category_id');
    }

    public function prepareForValidation()
    {
        if (!$this->input('url')) {
            $this->merge([
                'url' => str_slug($this->input('title'))
            ]);
        }
    }
}
