import { useForm } from '@tanstack/react-form';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DappDiscoveryPanel } from '@/components/dapp-discovery/DappDiscoveryPanel';
import '@/components/dapp-discovery/dapp-discovery.css';
import { Button } from '@/components/ui/button';
import { useSuiChainIdentifier } from '@/hooks/useSuiChainIdentifier';
import { getSuiGraphqlUrl } from '@/lib/sui-graphql';
import { ModuleStackTable } from './explore/ModuleStackTable';
import { VirtualizedDemo } from './explore/VirtualizedDemo';

export function ExplorePage() {
  const chainQuery = useSuiChainIdentifier();
  const [noteSaved, setNoteSaved] = useState(false);

  const form = useForm({
    defaultValues: { note: '' },
    onSubmit: async ({ value }) => {
      if (!value.note.trim()) return;
      setNoteSaved(true);
      window.setTimeout(() => setNoteSaved(false), 2000);
    },
  });

  return (
    <div className="app-placeholder-page explore-page dapp-discovery-scope max-w-5xl space-y-10">
      <Link to="/" className="app-placeholder-page__back">
        ← Home
      </Link>
      <header className="space-y-3 text-left">
        <h1 className="app-placeholder-page__title">Dapp discovery</h1>
        <p className="dapp-discovery-scope__intro">
          Curated directory of EVE Frontier ecosystem dapps: live URLs,
          repositories, Move package IDs, and categories. Thumbnails use your
          artwork when provided, otherwise the live site icon or a colored
          placeholder — similar idea to gallery-style discovery sites.
        </p>
      </header>

      <DappDiscoveryPanel />

      <details className="explore-page__dev-demos rounded-lg border border-border p-4">
        <summary className="cursor-pointer text-sm font-semibold text-foreground">
          Developer stack demos (GraphQL, Table, Form, Virtual)
        </summary>
        <div className="mt-6 max-w-3xl space-y-8">
          <p className="text-muted-foreground text-sm leading-relaxed">
            Wallet connection lives in the header (<strong>Connect</strong>).
            The sections below demonstrate TanStack data layers and Sui GraphQL
            connectivity.
          </p>

          <section
            className="space-y-2"
            aria-labelledby="explore-graphql-heading"
          >
            <h2
              id="explore-graphql-heading"
              className="text-lg font-semibold text-foreground"
            >
              Sui GraphQL
            </h2>
            <p className="text-muted-foreground font-mono text-xs break-all">
              {getSuiGraphqlUrl()}
            </p>
            {chainQuery.isLoading ? (
              <p className="text-muted-foreground text-sm">
                Loading chain identifier…
              </p>
            ) : chainQuery.isError ? (
              <p className="text-destructive text-sm">
                Could not reach GraphQL. Check URL or network.
              </p>
            ) : (
              <p className="text-sm">
                <span className="text-muted-foreground">chainIdentifier:</span>{' '}
                <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                  {chainQuery.data}
                </code>
              </p>
            )}
          </section>

          <section
            className="space-y-2"
            aria-labelledby="explore-table-heading"
          >
            <h2
              id="explore-table-heading"
              className="text-lg font-semibold text-foreground"
            >
              TanStack Table
            </h2>
            <ModuleStackTable />
          </section>

          <section className="space-y-2" aria-labelledby="explore-form-heading">
            <h2
              id="explore-form-heading"
              className="text-lg font-semibold text-foreground"
            >
              TanStack Form
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void form.handleSubmit();
              }}
              className="flex max-w-md flex-col gap-2"
            >
              <form.Field name="note">
                {(field) => (
                  <textarea
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="Scratch note (local only for now)"
                    rows={3}
                    className="border-input bg-background text-foreground focus-visible:ring-ring rounded-md border px-3 py-2 text-sm outline-none focus-visible:ring-2"
                  />
                )}
              </form.Field>
              <Button type="submit" variant="secondary" size="sm">
                Save note (local demo)
              </Button>
              {noteSaved ? (
                <p className="text-muted-foreground text-xs" role="status">
                  Note captured (client-only placeholder).
                </p>
              ) : null}
            </form>
          </section>

          <section
            className="space-y-2"
            aria-labelledby="explore-virtual-heading"
          >
            <h2
              id="explore-virtual-heading"
              className="text-lg font-semibold text-foreground"
            >
              TanStack Virtual
            </h2>
            <VirtualizedDemo />
          </section>
        </div>
      </details>
    </div>
  );
}
