<?php

namespace App\Http\Requests\Admin\Page;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required'],
            'url' => ['required'],
            'custom_title' => ['nullable'],
            'description' => ['nullable'],
            'keywords' => ['nullable'],
            'datahub' => ['nullable']
        ];
    }

    public function prepareForValidation()
    {

        if (!$this->input('url')) {
            $this->merge([
                'url' => str_slug($this->input('title'))
            ]);
        }
        $data = json_decode($this->input('datahub', true));
        if (is_object($data)) {
            $data = get_object_vars($data);
        }

        $this->merge([
            'datahub' => $data['data']
        ]);

        dd($this);

    }
}
