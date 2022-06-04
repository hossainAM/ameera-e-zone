import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const NavBar = () => {
    const router = useRouter();
    const isActive = (r) => {
        if(r === router.pathname){
            return 'active'
        }else {
            return ''
        }
    }
    return (
        <>
          <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="flex-1">
                <Link href='/'><a className="btn btn-ghost normal-case text-xl">AMEERA E-ZONE</a></Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link href="/cart"><a className={isActive('/cart')}> <i className="fas fa-shopping-cart -mr-2"></i>Cart</a></Link>
                    </li>
                    <li>
                        <Link href="/signin"><a className={isActive('/signin')}> <i className="fas fa-user -mr-2"></i>Sign in</a></Link>
                    </li>
                    {/* <li tabindex="0">
                        <a>
                        Parent
                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li><a>Submenu 1</a></li>
                            <li><a>Submenu 2</a></li>
                        </ul>
                    </li> */}
                </ul>
            </div>
          </div>
        </>
    );
};

export default NavBar;