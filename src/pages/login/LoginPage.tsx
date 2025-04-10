/* eslint-disable @typescript-eslint/no-unused-vars */
import TextInput from "@/components/form/TextInput";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import SbLogo from "@/assets/images/logo/logo-sb.png";
import SbLoginBackground from "@/assets/images/logo/img-login.png";

type FormValues = {
  username: string;
  password: string;
};

function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      username: "nTree",
      password: "1",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      //   showLoading();
      //   const response = await UserService.login({
      //     username: values.username,
      //     password: values.password,
      //   });
      //   hideLoading();
      //   if (response.status === ApiResponseStats.OK) {
      //     sessionStorage.setItem(storageKey.user, JSON.stringify(response.data));
      //     sessionStorage.setItem(storageKey.accessToken, response.data.accessToken);
      //     sessionStorage.setItem(
      //       storageKey.refreshToken,
      //       response.data.refreshToken
      //     );
      //     await fetchUser();
      //     navigate("/dashboard", {
      //       replace: true,
      //     });
      //   } else {
      //     console.log(response.error);
      //     alert("[" + response.error.code + "] " + response.error.message);
      //   }
    } catch (error) {
      //   hideLoading();
      //   console.log(error);
    }
  };

  return (
    <div
      className="flex items-center justify-center w-full h-screen bg-cover bg-center  shadow-lg"
      style={{ backgroundImage: `url(${SbLoginBackground})` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex justify-center">
            <div>
              <img className="mb-2" src={SbLogo} alt="SB 로고" />
            </div>
          </div>
          <div className="mb-8 flex justify-center">
            <p className="font-bold text-2xl">여신관리 시스템</p>
          </div>
          <div className="flex flex-col gap-4 mb-6">
            <TextInput
              id="username"
              type="text"
              label="아이디"
              className="w-full py-2 shadow-md"
              placeholder="아이디"
              error={errors.username}
              {...register("username", {
                required: "아이디를 입력해 주세요.",
              })}
            />
            <TextInput
              id="password"
              type="password"
              label="비밀번호"
              className="w-full py-2 shadow-md"
              placeholder="비밀번호"
              error={errors.password}
              {...register("password", {
                required: "비밀번호를 입력해 주세요.",
              })}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 rounded-[2px] hover:animate-gradient-primary bg-black"
          >
            <p className="text-white">로그인</p>
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
