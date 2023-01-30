import Link from "next/link";

export default function Home() {
    return (
        <>
            <center>
                <Link href="/counter" style={{ textDecoration: "none" }}>
                    <h1 style={{ color: "blue" }}>
                        Go to <u>Counter App</u>
                    </h1>
                </Link>
                <hr></hr>
                <Link href="/todo/" style={{ textDecoration: "none" }}>
                    <h1 style={{ color: "blue" }}>
                        Go to <u>To do App </u>
                    </h1>
                </Link>
            </center>
        </>
    );
}
