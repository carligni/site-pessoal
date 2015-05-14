@extends('master')

@section('content')
	<h4>{{ $cancao->title }}</h4>
    
    @if ($cancao->lyrics)
        <article class="lyrics">
            {!! nl2br($cancao->lyrics) !!}
        </article>
    @endif
@endsection
