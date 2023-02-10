<?php

declare(strict_types=1);

namespace Tests\Feature\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class IndexControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testIndexSuccessStatus(): void
    {
        $response = $this->get(route('home',['id'=>1]));

        $response->assertStatus(200)
            ->assertOk()
            ->assertLocation('http://localhost')
            ->assertSuccessful()
            ->assertValid();
    }
}
