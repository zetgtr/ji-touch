<?php

namespace App\Http\Requests\Settings\Menu;

use Illuminate\Foundation\Http\FormRequest;

class SettingsMenuRequest extends FormRequest
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
            'logo' => ['min:2','string','nullable'],
            'name' => ['min:2','string','required'],
            'url' => ['min:2','string','nullable'],
            'position' => ['min:4','max:5','required']
        ];
    }
}
