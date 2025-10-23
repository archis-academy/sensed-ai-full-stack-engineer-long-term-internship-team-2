import { ReactNode } from "react";
import SecondaryHeader from "@components/secondaryHeader/secondaryHeader";
import PrimaryHeader from "@components/primaryHeader/primaryHeader";

type LayoutProps = {
    children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <SecondaryHeader />
            <PrimaryHeader />
            {children}
        </>
    );
}
