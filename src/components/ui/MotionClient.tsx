"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = React.ComponentProps<typeof motion.div> & {
  tag?: string;
};

export default function MotionClient({ tag = "div", children, ...props }: Props) {
  const MotionTag: any = (motion as any)[tag] || motion.div;
  return <MotionTag {...props}>{children}</MotionTag>;
}
