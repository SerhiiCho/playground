<h3 class="text-center py-2">Posts page</h3>

<div class="row">
    <div class="col-md-6 offset-md-3">
        <form action="inc/add-post.inc.php" method="post">
            <div class="form-group">
                <label for="img">Image url</label>
                <input type="text" id="img"
                    class="form-control"
                    placeholder="Image url"
                    name="img"
                >
            </div>
            <div class="form-group">
                <label for="text">Text</label>
                <textarea class="form-control" id="text"
                    placeholder="Text here"
                    name="text"
                ></textarea>
            </div>
            <div class="form-group">
                <button class="btn btn-dark"
                    type="submit"
                    name="submit"
                >Add post</button>
            </div>
        </form>
    </div>
</div>

<div class="row">
    <?=$posts;?>
</div>