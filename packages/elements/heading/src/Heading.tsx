import React, { FC, ReactNode } from 'react';
// // @ts-ignoreE
// import { css } from '@trousers/macro';

// import copyToClipboard from '@precursor/copy-to-clipboard';
// import { Theme } from '@precursor/theme';

type Headings = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps {
    children: ReactNode;
    id?: string;
    as?: Headings;
    weight?: Headings;
}

// const styles = css('heading', {
//     fontFamily: 'var(--font-heading)',
//     fontWeight: 'var(--fontWeight-heading)',
//     fontSize: 'var(--fontSize-h1)',
//     lineHeight: 'var(--lineHeight-h1)',
//     color: 'var(--color-typography-heading)',
//     margin: 0,

//     '&:hover > a': {
//         opacity: 1,
//     },
// })
//     .modifier('h2', {
//         fontSize: 'var(--fontSize-h2)',
//         lineHeight: 'var(--lineHeight-h2)',
//     })
//     .modifier('h3', {
//         fontSize: 'var(--fontSize-h3)',
//         lineHeight: 'var(--lineHeight-h3)',
//     })
//     .modifier('h4', {
//         fontSize: 'var(--fontSize-h4)',
//         lineHeight: 'var(--lineHeight-h4)',
//     })
//     .modifier('h5', {
//         fontSize: 'var(--fontSize-h5)',
//         lineHeight: 'var(--lineHeight-h5)',
//     })
//     .modifier('h6', {
//         fontSize: 'var(--fontSize-h6)',
//         lineHeight: 'var(--lineHeight-h6)',
//     });

const Heading: FC<HeadingProps> = ({
    children,
    // weight = 'h2',
    // as: asElement,
    // id,
}) => {
    // // TODO: we cant render out to a classname here
    // const className = useStyles(styles(weight));

    // function onClick() {
    //     if (window && id) {
    //         copyToClipboard(window.location.href);
    //     }
    // }

    // return React.createElement(
    //     asElement || weight,
    //     {
    //         className,
    //         id,
    //         onClick,
    //     },
    //     <Fragment>
    //         {children}
    //         {id && (
    //             <a
    //                 // @ts-ignore
    //                 css={css({
    //                     textDecoration: 'none',
    //                     padding: '0 0.5rem',
    //                     color: 'var(--color-link)',
    //                     opacity: '0',
    //                     borderRadius: 'var(--radius-m)',
    //                     border: `var(--border-size-0 solid transparent`,
    //                     ':focus': {
    //                         opacity: 1,
    //                         outline: 'none',
    //                         border: `var(--border-size-0 solid --var(--border-color-focus)`,
    //                     },
    //                 })}
    //                 href={`#${id}`}
    //                 onClick={onClick}
    //                 aria-label="anchor"
    //                 $h2={weight === 'h2'}
    //                 $h3={weight === 'h3'}
    //                 $h4={weight === 'h4'}
    //                 $h5={weight === 'h5'}
    //                 $h6={weight === 'h6'}
    //             >
    //                 #
    //             </a>
    //         )}
    //     </Fragment>,
    // );

    return <p>{children}</p>;
};

export default Heading;
