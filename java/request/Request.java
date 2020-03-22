import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class Request {
    public static void main(String[] args) {
        makeRequest("https://jsonplaceholder.typicode.com/todos");
    }

    private static void makeRequest(String url) {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder().uri(URI.create(url)).build();

        client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
            .thenApply(HttpResponse::body)
            .thenAccept(Request::parse)
            .join();
    }

    public static void parse(String responseBody) {
        System.out.println(responseBody);
    }
}
