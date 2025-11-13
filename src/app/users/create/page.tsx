"use client";
import { UserPayload, userSchema } from "@/components/parts/users/validation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateUser } from "@/components/parts/users/api";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const form = useForm<UserPayload>({
    resolver: zodResolver(userSchema),
  });

  const { control, handleSubmit } = form;

  const { mutate } = useCreateUser();

  const onSubmit = (data: UserPayload) => {
    const transformData = {
      ...data,
      umur: Number(data.umur),
    }
    mutate(transformData, {
      onSuccess: () => {
        form.reset();
        router.push("/");
      },
    });
  };
  return (
    <div className="bg-slate-300 max-w-xl mx-auto  mt-20 p-10 rounded-xl">
      <h1 className="text-xl font-semibold text-center mb-5">Tambah User</h1>
      <Form {...form}>
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            name="nama"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="umur"
            control={control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Umur</FormLabel>
                <FormControl>
                  <Input {...field} type="number" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end">
            <Button type="submit" className="cursor-pointer">
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Page;
