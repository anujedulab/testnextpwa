import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <div>
            <h1>
                Header
            </h1>
            <div style={{
                width: "128px", 
                height: "77px"
            }}>
                <Image 
                    src={
                        "https://picsum.photos/200/300"
                    }
                 width={128} height={77} alt={"Logo"} />
            </div>
            
            <Link href="/"> Home </Link>
            <Link href="/about"> About </Link>
        </div>
      );
}
 
export default Header;