<?php

namespace App\Http\Requests\Admin\User;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateProfileRequest extends FormRequest
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
            'id'=>['required'],
            'last_name'=>['nullable'],
            'first_name'=>['nullable'],
            'name'=>['required',Rule::unique(User::class)->ignore($this->id, 'id')],
            'email'=>['required','email',Rule::unique(User::class)->ignore($this->id, 'id')],
            'is_admin'=>['boolean'],
            'role_id'=>['exists:roles,id','required']
        ];
    }

    public function prepareForValidation(){
        if($this->input('is_admin')){
            $this->merge([
                'is_admin' => true
            ]);
        }else{
            $this->merge([
                'is_admin' => false
            ]);
        }
    }
}
