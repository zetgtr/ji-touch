<?php

namespace App\Http\Controllers\Form;

use App\Http\Controllers\Controller;
use App\Mail\FeedbackMail;
use App\Mail\OrderMail;
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
        try {
            if ($name == "feedback") {
                Mail::to('recipient@example.com')->send(new FeedbackMail($request->all()));
            }
            if ($name == "orderForm") {
                Mail::to('recipient@example.com')->send(new OrderMail($request->all()));
            }
            return ['status'=>true,'message'=>"Письмо успешно отправлено"];
        } catch (\Throwable $e) {
            return ['status'=>false,'message'=>$e->getMessage()];
        }
    }
}
