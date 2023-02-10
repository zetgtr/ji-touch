<?php

declare(strict_types=1);

namespace Tests\Feature\Http\Controllers;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class InfoControllerTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testIndexSuccessStatus(): void
    {
        $response = $this->get(route('info'));

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
            'comment'=>\fake()->text(100)
        ];
        $response = $this->post(route('info.store',$data));

        $response->assertStatus(302)
            ->assertSessionMissing("1")
            ->assertRedirect('http://localhost/info?status=success')
            ->assertLocation('http://localhost/info?status=success')
            ->assertValid();
    }
}
