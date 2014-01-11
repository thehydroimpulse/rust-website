# Rust Website

Just a quick Node app to get the bones together.

The goal of this repository is to get together and start improving the current Rust home page, documentation and tutorial sections. Having a solid, clean website can be a huge advantage to language adoption. It makes it easier for people to learn it.

Thus, our goals are many:

* Make it dead-simple to install Rust. The details on getting Rust's compiler to this point might not happen right away, but making thinking about and designing it in, will help.
* Provide Rust code straight away. The content is irrelevent, but just a few examples will immediately show what the syntax is like. Many languages, or even libraries require you to dig through many pages to find simple syntax.
* Enforce that Rust is a community project. IRC within the Rust community is also a huge thing. These should be explained to the end-user in a concise way.

As far as the documentation, here are some ideas:

* Provide examples and context for each function. There are many times where the single function definition and a brief explanation gives you no clue on how to use it effectively. Thus, giving context would be best.
* A consistent sidebar (left-hand) that shows the current context with ways on going back.

Have anything to add, discuss, or critique? Open an issue.

# Home Page

![Light Brown](https://photos-5.dropbox.com/t/0/AADTUgvdeejrJ4RuXaIYV0-TxUUfq_hU8cP7oB5bhzHGZg/12/6036456/png/1024x768/3/1389438000/0/2/Screenshot%202014-01-11%2002.10.07.png/aSey2tyCBhQmTwMMt9or5zHuBBO6v33tsBuLKGvAjM8)


# Usage

All the styles are written in Sass. To quickly do a one-off build:

```
make sass
```

To keep watching files for changes:

```
make watch
```

Run the node app:

```
node index.js
```

# External Dependencies (Client-side)

* Awesome Font
* jQuery - Probably don't need it. Just using it for a few selectors.
* Normalize (CSS)

# License

MIT