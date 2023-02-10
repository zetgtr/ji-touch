<?php
declare(strict_types=1);
namespace Tests\Feature\Http\Controllers\admin;

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
        $response = $this->get(route('admin.home.index'));

        $response->assertStatus(200)
            ->assertOk()
            ->assertLocation('http://localhost')
            ->assertSuccessful()
            ->assertValid();
    }


    public function testCreateSuccessStatus(): void
    {

        $response = $this->get(route('admin.home.create'));

        $response->assertStatus(200)
            ->assertOk()
            ->assertLocation('http://localhost')
            ->assertSuccessful()
            ->assertValid();
    }
}
