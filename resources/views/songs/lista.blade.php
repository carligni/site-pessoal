@extends('master')

@section('content')
    @foreach($cancoes as $cancao)	
    	<p><a href="/songs/{{ $cancao->slug }}">{{ $cancao->title }}</a></p>
    @endforeach
    
    {{ $letra }}
@endsection
