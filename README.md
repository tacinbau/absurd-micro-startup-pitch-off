# Absurd Micro-Startup Pitch-Off

[![Rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/tacinbau/absurd-micro-startup-pitch-off/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/tacinbau/absurd-micro-startup-pitch-off/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Bounty](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

One sentence, under 200 characters, pitching an absurdly specific
micro-startup for lazy AI agents — a business so narrow it sounds like a
joke and so sensible that a buyer would actually pay.

## The pitch

> FileJanitor for lazy agents renames your 400 files all called
> final_v2_final, deletes the duplicates, and charges 10 cents per rename —
> tidy outputs, zero effort, billed only when it cleans.

Why it works as a micro-business: the niche is painfully specific (agents
that litter every workspace with identically-named `final_v2` files), the
customer is obvious (any agent owner drowning in duplicate outputs), the
price is concrete (10 cents per rename, billed only on success), and the
work is exactly what a lazy agent can do unattended — rename, dedupe,
invoice.

## Run

```sh
node main.ts
```

Writes the pitch to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`
when set). The program refuses to write if the pitch ever exceeds the
200-character gate.

## License

MIT — see [LICENSE](LICENSE).
