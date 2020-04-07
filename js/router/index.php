<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Router example</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
</head>

<body>
    <nav>
        <div class="container">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Router</a>

                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About me</a></li>
                    <li><a href="/contact">Contact us</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container">
        <div id="app"></div>
        <script>
            const routes = [{
                    path: '/',
                    view: `<h4>Home page</h4>`,
                },
                {
                    path: '/about',
                    view: `<h4>About me page</h4>`,
                },
                {
                    path: '/contact',
                    view: `<h4>Contact us page</h4>`,
                },
            ];
            class Router {
                constructor(routes) {
                    this.routes = routes;
                    this.view = document.getElementById('app');
                    this.currentPath = window.location.pathname;
                }
                exec() {
                    const route = this.routes.find(route => route.path === this.currentPath);
                    if (!route || typeof route === 'undefined') {
                        return;
                    }
                    this.view.innerHTML = route.view;
                }
            }
            const router = new Router(routes);
            router.exec();
        </script>
    </div>
</body>

</html>