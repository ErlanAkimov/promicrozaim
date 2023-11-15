import React, { FC, } from 'react';
import styles from './header.module.scss';
import Link from 'next/link';

const Header: FC = () => {
    const navList = [
        {name: 'О нас', link: '/about'},
        {name: 'Статьи', link: '/posts'},
        {name: 'Рейтинг', link: '/rating'},
    ];

	return (
		<div className={styles.wrapperOuter}>
			<div className="wrapper">
				<div className={styles.wrapper}>
					<div className={styles.leftSide}>
						<Link href='/' className={styles.logo}> <span>PRO</span>Микрозайм</Link>
						<nav>
							<ul className={styles.nav}>
                                {
                                    navList.map((item, index) => {
                                        return <Link href={item.link} key={index} className={styles.navItem}>{item.name}</Link>
                                    })
                                }
							</ul>
						</nav>
					</div>

					<div className={styles.btns}>btns</div>
				</div>
			</div>
		</div>

	);
};

export default Header;
