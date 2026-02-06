import React from "react";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen">
            {/* You can add a navbar here */}
            {/* <nav>Navigation</nav> */}

            {/* This is where your page.tsx content will appear */}
            {children}

            {/* You can add a footer here */}
            {/* <footer>Footer</footer> */}
        </div>
    );
}
