<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin\Forms;

use App\Http\Controllers\Controller;
use App\Http\Requests\Forms\FeedbackRequest;
use App\Models\Forms\Feedback;
use App\QueryBuilder\Forms\FeedbackBuilder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\View\View;
use PHPUnit\Exception;

class FeedbackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param FeedbackBuilder $feedbackBuilder
     * @return View
     */
    public function index(FeedbackBuilder $feedbackBuilder) : View
    {
        return \view("admin.forms.feedback.index", ['feedbacks'=>$feedbackBuilder->getFeedbackPagination()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param FeedbackRequest $request
     * @return RedirectResponse
     */
    public function store(FeedbackRequest $request): RedirectResponse
    {
        $feedback = Feedback::create($request->validated());
        if ($feedback) {
            return \redirect()->route('info')->with('success', __('messages.admin.feedback.store.success') );
        }

        return \back()->with('error', __('messages.admin.feedback.store.fail'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Feedback $feedback
     * @return array
     */
    public function destroy(Feedback $feedback): array
    {
        try {
            $feedback->delete();
            $request = ['status' => true,'message' => __('messages.admin.feedback.destroy.success')];
        }catch (Exception $exception)
        {
            $request = ['status' => false, 'message' => __('messages.admin.feedback.destroy.fail').$exception->getMessage()];
        }
        return $request;
    }
}
