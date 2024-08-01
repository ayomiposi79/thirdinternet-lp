-- -- Custom SQL migration file, put you code below! --
-- create view leader_board as select *,rank() over(order by score desc) as rank,count(*) over() AS total_users from users;

DO $$
BEGIN
    -- Check if the view exists
    IF NOT EXISTS (
        SELECT 1
        FROM pg_views
        WHERE viewname = 'leader_board'
    ) THEN
        -- Create the view if it does not exist
        EXECUTE '
        CREATE VIEW leader_board AS 
        SELECT *, 
               rank() OVER (ORDER BY score DESC) AS rank, 
               count(*) OVER () AS total_users 
        FROM users;
        ';
    END IF;
END $$;
