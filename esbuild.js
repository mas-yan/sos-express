const {build} = reequire("esbuild")

build =({
    entryPoints: ["./src/index.ts"],
    minify: true,
    bundle : true,
    sourcemap: true,
    platform: "node",
    outfile: ".build/index.ts"
}).catch(()=>{
    process.exit(1);
})