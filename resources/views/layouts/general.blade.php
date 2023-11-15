<!DOCTYPE html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    @include('elements.head')
    <body>
      
        <div id="vueApp">
         
            
            {{-- @include('elements.navbar') --}}
            @yield('content')
           
            
        </div>
        @include('elements.scripts')

    </body>
</html>
