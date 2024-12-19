export default function NotFound() {
    return (
        <main style={{ textAlign: "center", padding: "20px" }}>
            <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
                404 - Page Not Found
            </h1>
            <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
                Sorry, we couldn't find the page you're looking for.
            </p>
            <a href="/" style={{ color: "#0070f3", textDecoration: "underline" }}>
                Go back to Home
            </a>
        </main>
    );
}
