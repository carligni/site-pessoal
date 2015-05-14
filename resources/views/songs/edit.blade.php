@extends('master')

@section('content')
    <h1>Canção</h1>
    {{ $cancao->description }}
    {!! Form::model($cancao, ['url' => 'songs/'.$cancao->slug, 'method' => 'PATCH']) !!}
        <div class="form-group">
            {!! Form::text('title', null, ['class' => 'form-control']) !!}
        </div>
        <div class="form-group">
            {!! Form::textarea('lyrics', null, ['class' => 'form-control']) !!}
        </div>
        <div class="form-group">
            {!! Form::submit('Update song', ['class' => 'btn btn-primary']) !!}
        </div>
    {!! Form::close() !!}
@endsection
