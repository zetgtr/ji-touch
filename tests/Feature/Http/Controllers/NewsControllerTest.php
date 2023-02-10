<?php

declare(strict_types=1);

namespace Tests\Feature\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class NewsControllerTest extends TestCase
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
    public function testShowSuccessStatus(): void
    {
        $response = $this->get(route('home.show',['id'=>1]));

        $response->assertStatus(200)
            ->assertOk()
            ->assertLocation('http://localhost')
            ->assertSuccessful()
            ->assertValid();
    }

    public function testStoreSuccessStatus(): void
    {
        $data = [
            'id'=> 1,
            'user'=>\fake()->userName(),
            'phone'=>\fake()->phoneNumber(),
            'email'=>\fake()->companyEmail(),
            'info'=>\fake()->text(100)
        ];
        $response = $this->post(route('home.store',$data));

        $response->assertStatus(302)
            ->assertSessionMissing("1")
            ->assertRedirect('http://localhost/news/show/1?status=success')
            ->assertLocation('http://localhost/news/show/1?status=success')
            ->assertValid();
    }
}
