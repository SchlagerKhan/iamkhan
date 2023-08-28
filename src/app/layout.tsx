import '~/ui/styles/globals.css';

import type { Metadata } from 'next';

import { Questrial, Raleway } from 'next/font/google';

const questrial = Questrial({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-questrial',
});

const raleway = Raleway({
    subsets: ['latin'],
    variable: '--font-raleway',
});

export const metadata: Metadata = {
    title: 'I Am Khan',
    // description: '',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
    const bodyProps = {
        className: `${questrial.variable} ${raleway.variable} ${raleway.className}`,

        children,
    };

    return (
        <html lang="en">
            <body {...bodyProps} />
        </html>
    );
}
