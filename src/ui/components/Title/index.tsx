import cx from './index.module.css';

function getComponent(props: TitleProps) {
    const { level } = props;

    switch (level) {
        case 1:
            return 'h1';
        case 2:
            return 'h2';
    }
}

function getClassNameByLevel(props: TitleProps) {
    const { level } = props;

    switch (level) {
        case 1:
            return 'text-8xl';
        case 2:
            return 'text-5xl';
    }
}

export function Title(props: TitleProps) {
    const { level, className, ...rest } = props;

    const Component = getComponent(props);

    const className__level = getClassNameByLevel(props);

    const componentProps = {
        ...rest,

        className: `${cx.title} ${className__level} ${className}`,
    };

    return <Component {...componentProps} />;
}

export interface TitleProps {
    className?: string;

    level: 1 | 2;

    children: React.ReactNode;
}
