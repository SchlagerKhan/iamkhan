'use client';

import { Title } from '~/ui/components';
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

        wrapper: 'span',

        speed: 10,
    };

    return (
        <section className="h-100dvh bg-red text-white flex flex-col justify-center items-center">
            <Title level={1} className="mb-6 text-8xl">
                <TypeAnimation {...animationProps} />
            </Title>

            <div className={cx.description}>
                <hr />

                <p>Developer | Designer | Enthusiast</p>
            </div>
        </section>
    );
}
