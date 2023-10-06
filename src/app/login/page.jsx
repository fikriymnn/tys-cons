// "use client";
// import CustomFooter from "@/components/CustomFooter";
// import NavbarWithCTAButton from "@/components/NavbarWithCTAButton";

// import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../firebase/page";

// export default function LoginPage() {
//   const { push } = useRouter();

//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = (e) => {
//     // await logIn(email, password);
//     // router.push("/produkAdmin");
//     // await logIn(email, password);
//     //   router.push("/produkAdmin");
//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         console.log(userCredential.user);
//         localStorage.setItem("auth", "1");
//         push("/produkAdmin");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         alert(errorMessage);
//         console.log(errorCode);
//       });
//     e.preventDefault();
//     console.log("onSubmit");
//     console.log(email);
//     console.log(password);

//     // push("/menu");
//   };
//   return (
//     <>
//       <NavbarWithCTAButton />
//       <div className="bg-black  ">
//         <div className=' bg-cover bg-[url("/assets/images/login.jpg")] h-screen w-full flex justify-center items-center opacity-30 absolute'></div>
//         <div className="h-screen flex justify-center items-center">
//           <div className="w-[700px] mx-5 z-20">
//             <Card>
//               <form onSubmit={onSubmit} className="flex flex-col gap-4 ">
//                 <div>
//                   <div className="mb-2 block">
//                     <div>
//                       <p className="text-blue-500 font-semibold text-2xl mb-5">
//                         Login
//                       </p>
//                     </div>
//                     <Label htmlFor="Email" value="Email" />
//                   </div>
//                   <TextInput
//                     id="email"
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Input Your Email"
//                     required
//                     type="email"
//                   />
//                 </div>
//                 <div>
//                   <div className="mb-2 block">
//                     <Label htmlFor="Password" value="Password" />
//                   </div>
//                   <TextInput
//                     id="password"
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Input Your Password"
//                     required
//                     type="password"
//                   />
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <Checkbox id="remember" />
//                   <Label htmlFor="remember">Remember me</Label>
//                 </div>
//                 <Button type="submit" className="bg-blue-500">
//                   Login
//                 </Button>
//                 <div className="flex gap-1">
//                   <p>Didnt have an account ?</p>
//                   <a href="/register">
//                     <p className="font-semibold hover:text-blue-500 duration-100 ease-in-out">
//                       Sign up
//                     </p>
//                   </a>
//                 </div>
//               </form>
//             </Card>
//           </div>
//         </div>
//       </div>
//       <CustomFooter />
//     </>
//   );
// }

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/page";

export default function LoginPage() {
  const { push } = useRouter();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    // await logIn(email, password);
    // router.push("/produkAdmin");
    // await logIn(email, password);
    //   router.push("/produkAdmin");
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        alert("Login Berhasil");

        push("/dashboardAdmin");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        console.log(errorCode);
      });
    e.preventDefault();

    // push("/menu");
  };
  return (
    <>
      <br />
      <div className="bg-[#3C2A21] md:w-[500px] sm:w-[450px] w-[350px] mx-auto rounded-xl md:mt-20 sm:mt-20 mt-36 mb-20 ">
        <h1 className="md:text-3xl sm:text-2xl text-xl font-bold text-center pt-10 mb-5 text-white">
          Login
        </h1>
        <div className="pb-20 pl-20 pr-20">
          <form onSubmit={onSubmit} className="">
            <div>
              <p className="md:text-base text-sm">Email :</p>
              <input
                id="email"
                name="email"
                type="text"
                placeholder="Masukan Email"
                className="text-black my-5 md:w-80 sm:w-[300px] w-[200px]"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <p className="md:text-base text-sm">Password :</p>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Masukan Password"
                className="text-black my-5  md:w-80 sm:w-[300px] w-[200px]"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center mt-3">
              <button className="bg-neutral-400 px-4 py-1 rounded-lg m-auto hover:bg-neutral-600">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
