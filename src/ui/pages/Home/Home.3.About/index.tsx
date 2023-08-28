/* eslint-disable react/no-unescaped-entities */

import cx from './index.module.css';

import Image from 'next/image';
import { Title } from '~/ui/components';

export function Home__About() {
    return (
        <section id={cx.about}>
            <Title level={2} className="p-12">
                ABOUT
            </Title>

            <div className="flex items-center">
                <Image
                    width={300}
                    height={300}
                    src="khan.svg"
                    alt="Profile image of Khan"
                />

                <div>
                    <p>
                        <strong>Hello there, I am Khan</strong>
                    </p>

                    <p>Tech and design entusiast from Sweden.</p>

                    <p>
                        This is my website. It is actually not much to see. But
                        honestly, I'm pretty good at creating these things. Apps
                        and websites, that is.
                    </p>

                    <p>
                        But if you'd like I would love to chat with you about...
                        anything really. Not that I don't have friends, I just
                        like to talk to people about interesting stuff.
                    </p>

                    <p>
                        So feel free as a bird to contact me in anyway you want
                        to (check the footer).
                    </p>
                </div>
            </div>
        </section>
    );
}
