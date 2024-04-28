/* Replace with your SQL commands */-- Table: public.users
 -- DROP TABLE IF EXISTS public.users;

CREATE TABLE IF NOT EXISTS public.users (id integer NOT NULL DEFAULT nextval('users_id_seq'::regclass),
                                                                     username character varying(20) COLLATE pg_catalog."default",
                                                                                                            lastname character varying(20) COLLATE pg_catalog."default",
                                                                                                                                                   email character varying(30) COLLATE pg_catalog."default",
                                                                                                                                                                                       passworduser character varying(70) COLLATE pg_catalog."default",
                                                                                                                                                                                                                                  CONSTRAINT users_pkey PRIMARY KEY (id)) TABLESPACE pg_default;


ALTER TABLE IF EXISTS public.users OWNER to postgres;

-- Table: public.offers
 -- DROP TABLE IF EXISTS public.offers;

CREATE TABLE IF NOT EXISTS public.offers (offer_id integer NOT NULL DEFAULT nextval('offers_offer_id_seq'::regclass),
                                                                            offer_info character varying(100) COLLATE pg_catalog."default",
                                                                                                                      offer_background_color character varying(20) COLLATE pg_catalog."default",
                                                                                                                                                                           offer_image character varying(200) COLLATE pg_catalog."default",
                                                                                                                                                                                                                      CONSTRAINT offers_pkey PRIMARY KEY (offer_id)) TABLESPACE pg_default;


ALTER TABLE IF EXISTS public.offers OWNER to postgres;

-- Table: public.product_detail
 -- DROP TABLE IF EXISTS public.product_detail;
-- Table: public.product_detail
 -- DROP TABLE IF EXISTS public.product_detail;

CREATE TABLE IF NOT EXISTS public.product_detail ( id integer NOT NULL DEFAULT nextval('product_id_seq'::regclass),
                                                                               product_name character varying(100) COLLATE pg_catalog."default",
                                                                                                                           product_desc text COLLATE pg_catalog."default",
                                                                                                                                                     items_left integer, image text COLLATE pg_catalog."default",
                                                                                                                                                                                            product_price numeric(10,2),
                                                                                                                                                                                                          rating numeric(2,1),
                                                                                                                                                                                                                 category character varying(50) COLLATE pg_catalog."default",
                                                                                                                                                                                                                                                        CONSTRAINT product_pkey PRIMARY KEY (id)) TABLESPACE pg_default;


ALTER TABLE IF EXISTS public.product_detail OWNER to postgres;