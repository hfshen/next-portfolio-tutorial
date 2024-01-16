import Link from 'next/link';
import DarkModeToggleButton from './dark-mode-toggle-button';

export default function Header() {
    return (
        <>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <Link href="/">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            <img src="/logo.svg" alt="로로베리소프트웨어 Logo" className="w-10 h-10 text-white p-0 bg-indigo-500 rounded-full" />
                            <span className="ml-3 text-xl">로로베리소프트웨어</span>
                        </a>
                    </Link>



                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                        <Link href="/">
                            <a className="mr-5 hover:text-gray-900">홈</a>
                        </Link>

                        <Link href="/projects">
                            <a className="mr-5 hover:text-gray-900">프로젝트</a>
                        </Link>

                        <Link href="/contact">
                            <a className="mr-5 hover:text-gray-900">contract</a>
                        </Link>
                        {/* <a href="https://open.kakao.com/o/s1BHyWgc" className="mr-5 hover:text-gray-900">연락하기</a> */}

                    </nav>
                    {/* 다크모드 토글 버튼 작업해야함 */}
                    <DarkModeToggleButton />
                </div>
            </header>
        </>
    );
}
