'use client';

import cx from './index.module.css';

import { TypeAnimation } from 'react-type-animation';

const sequence = [
    'khan',
    'senior',
    'webdesigner',
    'tech enthusiast',
    'epic',
    'good enough',
    'swedish',
    'Satoshi Nakamoto',
    'fun',
    'in ketosis',
    'fun',
    'only human',
    'an optimistic nihilist',
    'in awe',
    'khan.',
].flatMap((word) => ['I am ' + word, 1000]);

type AnimationProps = React.ComponentProps<typeof TypeAnimation>;

export function Home__Intro() {
    const animationProps: AnimationProps = {
        sequence,

        wrapper: 'h1',

        speed: 10,
    };

    return (
        <section className="h-100dvh bg-red text-white flex flex-col justify-center items-center">
            <div className={cx.title}>
                <TypeAnimation {...animationProps} />
            </div>

            <div className={cx.description}>
                <hr />

                <p>Developer | Designer | Enthusiast</p>
            </div>
        </section>
    );
}
