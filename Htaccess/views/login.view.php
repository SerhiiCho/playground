<h3 class="pt-2 pb-3 text-center">Login page</h3>

<div class="row">
    <div class="col-md-6 offset-md-3">
        <form action="inc/login.inc.php" method="post">
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" id="email"
                    class="form-control"
                    name="email"
                    aria-describedby="email-help"
                    placeholder="Enter email"
                >
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password"
                    class="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                >
            </div>
            <button type="submit" class="btn btn-dark" name="submit">Login</button>
        </form>
    </div>
</div>
