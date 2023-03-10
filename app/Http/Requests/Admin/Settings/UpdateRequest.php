<?php

namespace App\Http\Requests\Admin\Settings;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'site_name' => ['nullable'],
            'site_banner' => ['nullable'],
            'user_name' => ['nullable'],
            'site_email' => ['nullable', 'email'],
            'footer' => ['nullable'],
            'description' => ['nullable'],
            'keywords' => ['nullable']
        ];
    }
}
