import type { Route } from "next";
import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
	primary: "border border-accent text-accent hover:bg-accent hover:text-surface",
	secondary: "border border-hairline-inner text-secondary hover:border-body-text hover:text-body-text",
};

const BASE_STYLES = "inline-flex items-center justify-center px-3 py-2 font-mono text-nav transition-all duration-120";

type CommonProps = {
	children: ReactNode;
	variant?: ButtonVariant;
	className?: string;
};

type LinkProps<T extends string> = CommonProps & { href: Route<T> } & Omit<ComponentProps<typeof Link>, "href" | "className">;
type ButtonElementProps = CommonProps & { href?: undefined } & Omit<ComponentProps<"button">, "className">;

type ButtonProps<T extends string> = LinkProps<T> | ButtonElementProps;

export default function Button<T extends string = string>({ children, variant = "primary", className = "", ...props }: ButtonProps<T>) {
	const styles = `${BASE_STYLES} ${VARIANT_STYLES[variant]} ${className}`;
	const content = variant === "primary" ? <>[ {children} ]</> : children;

	if (props.href) {
		return (
			<Link className={styles} {...(props as Omit<LinkProps<T>, keyof CommonProps>)}>
				{content}
			</Link>
		);
	}

	return (
		<button className={styles} {...(props as Omit<ButtonElementProps, keyof CommonProps>)}>
			{content}
		</button>
	);
}
