<?php

namespace App\Http\Controllers\Form;

use App\Http\Controllers\Controller;
use App\Mail\ZakazMail;
use App\QueryBuilder\Admin\FeedBack\FeedBackBuilder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class FormController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request, string $name, FeedBackBuilder $feedBackBuilder)
    {
        $feedBackBuilder->setForm($request->all());
        if($name == "zakaz")
        {
            Mail::to('recipient@example.com')->send(new ZakazMail($request->all()));
        }
    }
}
