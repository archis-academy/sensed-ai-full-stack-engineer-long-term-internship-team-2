import { ReactNode } from "react";
import SecondaryHeader from "@components/secondaryHeader/secondaryHeader";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <SecondaryHeader />
            {children}
        </>
    );
}
