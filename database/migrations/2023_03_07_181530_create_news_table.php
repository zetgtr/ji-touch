<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('news', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->text('description');
            $table->text('content');
            $table->json('images')->nullable();
            $table->string('url');
            $table->boolean('publish')->default(true);
            $table->integer('show')->default(0);
            $table->string('seoKeywords')->nullable();
            $table->string('seoTitle')->nullable();
            $table->text('seoDescription')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('news');
    }
};
